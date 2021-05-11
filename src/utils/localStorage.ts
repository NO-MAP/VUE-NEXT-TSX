import config from "../config"
import dayjs from "dayjs"

type Type = "session" | "localstorage"

interface IParamsSet {
  name: string;
  content: any;
  type?: Type;
}

interface IParams {
  name: string;
  type?: Type;
}

interface IStorage {
  dataType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function",
  content: any,
  dateTime: string
}

const keyName = config.stTitle + '-';

export const setStore = (params: IParamsSet): void => {
  const name = keyName + params.name;
  const data: IStorage = {
    dataType: typeof (params.content),
    content: params.content,
    dateTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
  }
  if (params?.type === "session") {
    window.sessionStorage.setItem(name, JSON.stringify(data))
  }
}

export const getStore = <T>(param: IParams): T | boolean => {
  let result: T | boolean = false;
  if (param?.type === "session") {
    const _content = window.sessionStorage.getItem(param.name)
    if (typeof _content === "string") {
      result = JSON.parse(_content).content as T
    }
  } else {
    const _content = window.localStorage.getItem(param.name);
    if (typeof _content === "string") {
      result = JSON.parse(_content).content as T
    }
  }
  return result
}

export const removeStore = (param: IParams) => {
  if (param?.type === "session") {
    window.sessionStorage.removeItem(param.name)
  } else {
    window.localStorage.removeItem(param.name)
  }
}

export const clearStore = (param: IParams) => {
  if (param?.type === "session") {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}