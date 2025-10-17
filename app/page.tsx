import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/avatar.png"
              alt="高鹏头像"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            高鹏
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            财税服务专家 · 企业管理咨询顾问
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            深圳 · 15年财税行业经验
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              关于我
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                  个人信息
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    姓名：高鹏
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    定位：深圳
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    行业经验：15年财税行业经验
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    现任职位：财税服务公司负责人、会计事务所合伙人
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                  服务范围
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  专注企业管理咨询服务，包括注册公司、代理记账、财务审计、税务筹划等，
                  助力企业合规经营，降本增效。拥有深圳20000+财务资源（财务经理级），
                  为企业提供专业的财税解决方案。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              技术专长
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">审</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">财务审计</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">年审、税审、高新专审等</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">企</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">企业服务</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">企业设立、账务规范、税务筹划</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">资</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">资源优势</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">深圳20000+财务资源</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">值</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">核心价值</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">帮助企业节税，专业财税解决方案</p>
              </div>
            </div>
          </div>
        </section>

        {/* WeChat Public Accounts Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              公众号运营
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">主</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">主业公众号</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">深圳市代理记账报税</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  公众号运营10个月
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  靠公众号引流变现六位数
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">副</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">副业公众号</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">一起来学AI吧</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  探索AI领域应用
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                  (探索中)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              联系我
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-green-500 shadow-lg bg-white p-2">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="微信二维码"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  微信咨询
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  扫码添加微信，获取专业财税咨询
                </p>
              </div>
              <div className="text-center lg:text-left lg:max-w-md">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  专业财税服务
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    免费财税咨询
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    企业注册代办
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    代理记账服务
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    税务筹划方案
                  </li>
                </ul>
                <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">
                  让企业经营更简单，让财税管理更专业
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 高鹏 · 财税服务专家 · 深圳
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            专业财税服务，助力企业发展
          </p>
        </div>
      </footer>
    </div>
  );
}
