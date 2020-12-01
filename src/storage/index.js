
/**
 * storage的封装
 */
const STORAGE_KEY = 'mall'

export default {
  // eslint-disable-next-line camelcase
  setItem (item, value, item_value) {
    // 设置mall下某一项的值
    // eslint-disable-next-line camelcase
    if (item_value) {
      const val = this.getItem(item_value)
      val[item] = value
      this.setItem(item_value, val)
    } else {
      const val = this.getStorage()
      val[item] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // eslint-disable-next-line camelcase
  getItem (item, item_value) {
    // 获取mall下的某一项的值
    // eslint-disable-next-line camelcase
    if (item_value) {
      const val = this.getItem(item_value)
      if (val) return val[item]
    }
    return this.getStorage()[item]
  },
  // 获取整个mall
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // eslint-disable-next-line camelcase
  clear (item, item_value) {
    const val = this.getStorage()
    // eslint-disable-next-line camelcase
    if (item_value) {
      if (!val[item_value]) return
      delete val[item_value][item]
    } else {
      delete val[item]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
