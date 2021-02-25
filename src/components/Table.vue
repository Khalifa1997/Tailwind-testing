<template>
  <a-table
    :columns="columns"
    :data-source="data"
    class="w-4/5"
    :rowClassName="rowClassName"
  >
    <a slot="name" slot-scope="text" class="bg-gray-500 text-red-500 text-xl">{{
      text
    }}</a>

    <span slot="customTitle">Host Name</span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "hostname",
    key: "hostname",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "hostname" }
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
    scopedSlots: { customRender: "model" }
  },
  {
    title: "Site",
    dataIndex: "site",
    key: "site",
    scopedSlots: { customRender: "site" }
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    scopedSlots: { customRender: "role" }
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" }
  }
];

const data = [
  {
    key: "1",
    hostname: "John Brown",
    model: 32,
    site: "New York No. 1 Lake Park",
    role: "CPE",
    status: "Available"
  },
  {
    key: "2",
    hostname: "Jim Green",
    model: 42,
    site: "London No. 1 Lake Park",
    role: "CPE",
    status: "Available"
  },
  {
    key: "3",
    hostname: "Joe Black",
    model: 32,
    site: "Sidney No. 1 Lake Park",
    role: "CPE",
    status: "Available"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    rowClassName: function() {
      return "rounded-xl px-2";
    }
  }
};
</script>
