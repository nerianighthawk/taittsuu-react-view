# タイッツーReactコンポーネント

## 概要

この React コンポーネントはタイッツーという SNS のタイムラインを埋め込むコンポーネントです。

## インストール方法

```console
npm install taittsuu-react-view
```

## 仕様

Props のパラメータは以下の通りです。

```yml
props:
    url:
        type: string
        description: タイッツー API の v0.1 以降を入力。タイムライン系限定。
        example: 'publictimelines'
    width:
        type: string
        description: タイムラインの横幅を指定
        example: '300px'
    height:
        type: string
        description: タイムラインの高さを指定
        example: '500px'
```

## その他

タイッツーの API の仕様上、クロスドメインでの通信は対応していません。  
私が作成したサーバーを立てるプログラムと併せてご利用ください。

https://github.com/nerianighthawk/taittsuu-server-composer
