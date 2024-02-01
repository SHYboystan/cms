import { ref, computed, watch, onMounted } from "vue";
import type { PaginationProps } from "ant-design-vue";

export default function useTable<T>(
  Request: (params) => Promise<{ list: T[]; total: number }>,
  Filter: Record<string, any>,
  immediate: boolean = true,
  handleContent?: any
) {
  const loading = ref<boolean>(false);
  const current = ref<number>(1);
  const pageSize = ref<number>(10);
  const total = ref<number>(0);
  const pageSizeOptions = ref<string[]>(["10", "20", "30", "40", "50"]);
  const dataSource = ref<T[]>([]);
  const pagination = computed(() => {
    return {
      total: total.value,
      current: current.value,
      pageSize: pageSize.value,
      size: "large",
      pageSizeOptions: pageSizeOptions.value,
      // 显示可改变每页数量
      showSizeChanger: true,
      // 显示总数
      showTotal: () =>
        `共 ${total.value} 条记录 第${current.value}/${Math.ceil(
          total.value / pageSize.value
        )}页`,
      showQuickJumper: true,
    };
  });
  /*
   * 请求方法
   * */
  const getTableData = () => {
    let vars = {
      page: current.value,
      size: pageSize.value,
      ...Filter.value,
    };
    loading.value = true;
    Request<T>(vars)
      .then((res) => {
        if (handleContent) {
          dataSource.value = res.list.map(handleContent);
        } else {
          dataSource.value = res.list;
        }
        total.value = res.total;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  onMounted(() => {
    if (immediate) {
      getTableData();
    }
  });

  const handleTableChange: (pag: PaginationProps) => void = (
    pag: PaginationProps
  ) => {
    const { current, pageSize } = pag;
    current.value = current;
    pageSize.value = pageSize;
  };

  watch([current, pageSize], () => {
    getTableData();
  });

  return {
    loading,
    dataSource,
    pagination,
    getTableData,
    handleTableChange,
  };
}
