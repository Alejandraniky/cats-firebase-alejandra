export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>Razas de Gatos</h2><div id="lista" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding: 10px;"></div>`;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "live_RFmut4ngBa5NgO22SOO7QZDxWBCu6DI7KtcZMJtCfxi0bnSwTrqCwMun1tLAjS1L"
      }
    });

    const data = await res.json();

    data.forEach((cat) => {
      const item = document.createElement("div");
      item.style = "border: 1px solid #ccc; padding: 10px; width: 200px; text-align: center;";

      item.innerHTML = `
        <h4>${cat.name}</h4>
        <p><strong>Origen:</strong> ${cat.origin}</p>
        ${cat.image?.url ? `<img src="${cat.image.url}" style="width: 100px; height: 100px; object-fit: cover;" />` : "<p>(Sin imagen)</p>"}
      `;

      lista.appendChild(item);
    });
  } catch (error) {
    app.innerHTML = `<p>Error al cargar las razas: ${error.message}</p>`;
  }
}
