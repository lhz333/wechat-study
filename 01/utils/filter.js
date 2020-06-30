function appFilter(config){
  if(config.onLaunch){
    let _onLaunch = config.onLaunch;
    config.onLaunch = function(ops) {
      console.log("执行埋点方法")
      //在这里干埋点的事，例如存储数据、上送数据
      _onLaunch.call(this);//调用原来的执行逻辑
    }
  }
  return config;
}

module.exports = {
  appFilter: appFilter
}