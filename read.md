* * * github開專案方法 !
在github上開一個repo (repository的意思)
再來去專案終端機
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/(你的用戶名)/(剛剛創的repo名).git
git push -u origin main

* * 
堤外技巧
移除 init
rm .git

再來去vite.config.mjs > export default defineConfig下加 (斜線記得加)
base: '/你的repo名/', 

* * 
以下同時也是 上傳更新檔案方法
npm run build
git add dist -f
git commit -m ""
git subtree push --prefix dist origin gh-pages

再來到repo頁面 找setting > page
點開網站網址
完成!

* * 
上傳報錯誤 
git pull --rebase --autostash 先拉檔案 rebase友善合併

git remote rm origin (删除关联的origin的远程库)
git remote add origin git@github.keycode-76/page4.git
或是直接用這一段也可以
git remote set-url origin git@github.com:keycode-76/page4.git (最後這一段是SHH)

* * 
出現無法追蹤的檔案 如下
「 Changes not staged for commit: Untracked files: 」
直接再加一次檔案
git add . 

* * 
本地和遠端分支之間的歷史不相關，需要強制合併 如下
「 fatal: refusing to merge unrelated histories 」
這條命令會強制推送本地 dist 目錄的內容到遠端 gh-pages 分支，覆蓋遠端的歷史。
很強的咒語
git push origin `git subtree split --prefix dist main`:gh-pages --force

* * 
未安裝過vite 請輸入 
npm install vite --save-dev

lib: {
   entry: 'index.html',
   name: 'test1',
   fileName: 'test_1',
   formats:['umd'],
  },


* * 
捨棄原檔 拉取遠端的檔案
mkdir my-new-repo
cd my-new-repo
git init 直接從資料夾開始
git remote add origin https://github.com/keycode-76/page4.git
git pull origin main

假如原本有建立路徑 會報錯 [ error: remote origin already exists ]
git remote remove origin 先清除原本的路徑
git remote add origin https://github.com/keycode-76/page4.git
git pull origin main

