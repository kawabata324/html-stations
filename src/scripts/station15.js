async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affilication: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affilication: "HogeHoge大学",
      is_student: true,
    },
  ];
  await test(3);
  const result = userList.map((element) => {
    element.full_name = `${element.family_name} ${element.first_name}`;
    return element;
  });
  return await result;
}

function test(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
