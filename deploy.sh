#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist

npm run build

mv docs/.vitepress/dist .

mv docs/logo.png ./dist


# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/lyios8859-1/yun.git main:gh-pages

cd -
