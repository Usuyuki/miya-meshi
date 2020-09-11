# Readme

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/H37kouya/miya-meshi.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/H37kouya/miya-meshi/context:javascript)
[![DeepScan grade](https://deepscan.io/api/teams/8910/projects/13774/branches/241082/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8910&pid=13774&bid=241082)

## Description

> Nuxt.js (on comopsition api) / TypeScript / FireBase

## Environment

環境変数については[こちら](./.docs/AboutEnvironment.md)を参照

``` shell
# メイン画面と管理者画面の同時起動
$ make dev

# メイン画面起動
$ make client-dev

# 管理者画面の起動
$ make admin-dev
```

### Windows

- [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)

## Docs

- [DB テーブル定義 (Cloud FireStore 定義)](./.docs/CloudFirestore.md)
- [クライアントルート定義](./.docs/RoutingClient.md)

## トラブルシューティング

### .vueファイル内でimportのパス解決ができないとき

エディターで開くルートディレクトリを`./`から`./admin`や`./client`に変更するとパスの解決ができた。
