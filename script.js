function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.lat;
    let longitude = place.lng;
    let title = place.title;
    // モデル用の空entityタグを生成
    let model = document.createElement("a-entity");
    // タグに緯度と経度を追加
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("name", `${title}`);

    setModel(models[modelIndex], model);

    // オブジェクトに対するクリックイベント
    const clickListener = function (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      let name = ev.target.getAttribute("name");

      const el = ev.detail.intersection && ev.detail.intersection.object.el;

      if (el && el === ev.target) {
        const label = document.querySelector(".instructions");
        label.innerText = name;
      }
    };
    model.addEventListener("click", clickListener);
    scene.appendChild(model);
  });
}
