全局设置（不推荐）

#使用http代理 
git config --global http.proxy http://127.0.0.1:58591
git config --global https.proxy https://127.0.0.1:58591
#使用socks5代理
git config --global http.proxy socks5://127.0.0.1:51837
git config --global https.proxy socks5://127.0.0.1:51837

只对Github代理（推荐）

#使用socks5代理（推荐）
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808
#使用http代理（不推荐）
git config --global http.https://github.com.proxy http://127.0.0.1:10809
取消代理
当你不需要使用代理时，可以取消之前设置的代理。

git config --global --unset socks5.proxy
git config --global --unset http.proxy
git config --global --unset https.proxy
