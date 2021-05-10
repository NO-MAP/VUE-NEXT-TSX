
export function isvalidUsername(str: string) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval: string) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}
/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s: string) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s: string) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s: string) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s: string) {
  return /^http[s]?:\/\/.*/.test(s)
}

/* 小写字母*/
export function validateLowerCase(str: string) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str: string) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/*验证pad还是pc*/
export const vaildatePc = function () {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  let flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email: string) {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone: string) {
  let list = [];
  let result = true;
  let msg = '';
  var isPhone = /^0\d{2,3}-?\d{7,8}$/;
  //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]  
  if (!validatenull(phone)) {
    if (phone.length == 11) {
      if (isPhone.test(phone)) {
        msg = '手机号码格式不正确';
      } else {
        result = false;
      }
    } else {
      msg = '手机号码长度不为11位';
    }
  } else {
    msg = '手机号码不能为空';
  }
  list.push(result);
  list.push(msg);
  return list;
}
/**
 * 判断姓名是否正确
 */
export function validatename(name: string) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/;
  if (!regName.test(name)) return false;
  return true;
}
/**
 * 判断是否为整数
 */
export function isInteger(obj: any) {
  return typeof obj === 'number' && obj % 1 === 0
}

/**
 * 判断是否为空
 */
export function validatenull(val: any) {
  if (typeof val == 'boolean') {
    return false;
  }
  if (typeof val == 'number') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }
  return false;
}
