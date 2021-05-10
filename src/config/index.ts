const baseUrl = "http://10.180.198.101:8010";

interface IConfig {
  title: string;
  stTitle: string;
  baseUrl: string,
  cookieExpires: number
}

const config: IConfig = {
  title: "VNEXT-ADMIN",
  stTitle: "vna",
  baseUrl: baseUrl,
  cookieExpires: 1,
}

export default config