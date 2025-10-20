import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="text-center">
          <div className="w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl shadow-blue-500/20 ring-4 ring-blue-100 dark:ring-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30">
            <Image
              src="/avatar.png"
              alt="高鹏头像"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 tracking-tight">
            高鹏
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30">
              财税服务专家
            </span>
            <span className="hidden md:inline text-gray-400">•</span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm font-semibold border border-gray-200 dark:border-slate-700">
              企业管理咨询顾问
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            深圳 · 15年财税行业经验
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 relative z-10">
        {/* About Section */}
        <section className="mb-16 group">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 dark:from-gray-200 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-10 text-center">
              关于我
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
                  个人信息
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">姓名：</span>
                    <span className="text-gray-900 dark:text-white ml-2">高鹏</span>
                  </li>
                  <li className="flex items-center p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">定位：</span>
                    <span className="text-gray-900 dark:text-white ml-2">深圳</span>
                  </li>
                  <li className="flex items-center p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">行业经验：</span>
                    <span className="text-gray-900 dark:text-white ml-2">15年财税行业经验</span>
                  </li>
                  <li className="flex items-start p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">现任职位：</span>
                      <span className="text-gray-900 dark:text-white ml-2">财税服务公司负责人、会计事务所合伙人</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  服务范围
                </h3>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    专注企业管理咨询服务，包括注册公司、代理记账、财务审计、税务筹划等，
                    助力企业合规经营，降本增效。拥有深圳<span className="font-bold text-blue-600 dark:text-blue-400">20000+</span>财务资源（财务经理级），
                    为企业提供专业的财税解决方案。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-indigo-700 to-purple-700 dark:from-gray-200 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent mb-10 text-center">
              技术专长
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group text-center p-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950/40 dark:via-blue-900/40 dark:to-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">审</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">财务审计</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">年审、税审、高新专审等</p>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-green-50 via-green-100 to-green-50 dark:from-green-950/40 dark:via-green-900/40 dark:to-green-950/40 rounded-2xl border border-green-200 dark:border-green-800/50 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">企</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">企业服务</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">企业设立、账务规范、税务筹划</p>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 dark:from-purple-950/40 dark:via-purple-900/40 dark:to-purple-950/40 rounded-2xl border border-purple-200 dark:border-purple-800/50 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">资</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">资源优势</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">深圳20000+财务资源</p>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 dark:from-orange-950/40 dark:via-orange-900/40 dark:to-orange-950/40 rounded-2xl border border-orange-200 dark:border-orange-800/50 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">值</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">核心价值</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">帮助企业节税，专业财税解决方案</p>
              </div>
            </div>
          </div>
        </section>

        {/* WeChat Public Accounts Section */}
        <section className="mb-16">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-green-700 to-emerald-700 dark:from-gray-200 dark:via-green-300 dark:to-emerald-300 bg-clip-text text-transparent mb-10 text-center">
              公众号运营
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 dark:from-green-950/40 dark:via-green-900/40 dark:to-emerald-950/40 rounded-2xl p-8 border border-green-200 dark:border-green-800/50 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mr-4 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">主</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">主业公众号</h3>
                    <p className="text-green-700 dark:text-green-400 font-semibold text-lg">深圳市代理记账报税</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    公众号运营10个月
                  </p>
                  <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-green-300 dark:border-green-700">
                    <p className="text-green-700 dark:text-green-400 font-bold text-xl flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      靠公众号引流变现六位数
                    </p>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950/40 dark:via-blue-900/40 dark:to-cyan-950/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">副</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">副业公众号</h3>
                    <p className="text-blue-700 dark:text-blue-400 font-semibold text-lg">一起来学AI吧</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    探索AI领域应用
                  </p>
                  <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-blue-300 dark:border-blue-700">
                    <p className="text-blue-700 dark:text-blue-400 font-bold text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      探索中
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-cyan-700 dark:from-gray-200 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent mb-10 text-center">
              联系我
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
              <div className="text-center group">
                <div className="w-56 h-56 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-green-500 dark:border-green-600 shadow-2xl shadow-green-500/30 bg-white dark:bg-slate-800 p-3 hover:scale-105 transition-all duration-300 group-hover:shadow-green-500/50">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="微信二维码"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg shadow-green-500/30 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C7.82 2.188 7.12 2.89 7.12 3.758V20.242C7.12 21.11 7.821 21.812 8.691 21.812H15.309C16.179 21.812 16.88 21.11 16.88 20.242V3.758C16.88 2.89 16.18 2.188 15.309 2.188H8.691ZM12.5 20.25C12.5 20.664 12.164 21 11.75 21 11.336 21 11 20.664 11 20.25 11 19.836 11.336 19.5 11.75 19.5 12.164 19.5 12.5 19.836 12.5 20.25Z"/>
                  </svg>
                  <h3 className="text-xl font-bold">
                    微信咨询
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  扫码添加微信，获取专业财税咨询
                </p>
              </div>
              <div className="text-center lg:text-left lg:max-w-md space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                  专业财税服务
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-center lg:justify-start group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">免费财税咨询</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">企业注册代办</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">代理记账服务</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">税务筹划方案</span>
                  </li>
                </ul>
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl border border-green-200 dark:border-green-800/50">
                  <p className="text-green-700 dark:text-green-400 font-bold text-xl text-center lg:text-left">
                    让企业经营更简单，让财税管理更专业
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border-t border-gray-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-6 py-10 text-center">
          <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
            © 2025 高鹏 · 财税服务专家 · 深圳
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            专业财税服务，助力企业发展
          </p>
        </div>
      </footer>
    </div>
  );
}
