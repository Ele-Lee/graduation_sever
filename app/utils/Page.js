class Page {
    constructor(pageNum = 1, pageSize = 10) {
        this.pageNum = pageNum;
        this.pageSize = pageSize;
    }

    setData(data) {
        this.data = data;
    }

    setRecordCount(records) {
        this.recordCount = records;
    }
}

module.exports = Page;