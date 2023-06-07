import Hexo from 'hexo';
let HEXO_INSTANCE: Hexo | null = null;
export async function getHexoInstance() {
  // 单例模式
  if (HEXO_INSTANCE) {
    return HEXO_INSTANCE;
  }

  // 初始化 Hexo
  const hexoInstance = new Hexo(process.cwd(), {
    silent: true,
  });
  // 初始化 Hexo 实例（加载插件、加载配置文件）
  await hexoInstance.init();
  // 载入 Hexo 目录（文章、草稿、站点数据、主题）
  await hexoInstance.load();
  HEXO_INSTANCE = hexoInstance;
  return hexoInstance;
}