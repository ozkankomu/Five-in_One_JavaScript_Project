const btn = document.querySelector(".btn-outline-danger");

const kredi_input = document.querySelector(".form-select");

const vade = document.querySelector("#vade");

const tutar = document.querySelector("#tutar");

let oran = 0;

document.querySelector(".btn-outline-danger").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(kredi_input.value);
  console.log(vade.value);
  console.log(tutar.value);
  if (
    !kredi_input.value ||
    !vade.value ||
    !tutar.value ||
    kredi_input.value === "Seciniz"
  ) {
    alert("Eksik veya hatalı giriş yaptınız");
  } else {
    if (kredi_input.value === "Konut_Kredisi") {
      oran = 1.39;
      console.log(oran);
    } else if (kredi_input.value === "Tasit_Kredisi") {
      oran = 1.79;
    } else if (kredi_input.value === "Ihtiyac_Kredisi") {
      oran = 1.99;
      console.log(oran);
    }
  }
  const faiz = oran / 100;
  const taksit_tutari =
    tutar.value *
    ((faiz * (1 + faiz) ** vade.value) / ((1 + faiz) ** vade.value - 1));

  console.log(taksit_tutari);

  document.querySelector("#tablee").innerHTML = `
  
  <h2 class="text-warning my-3 text-center display-3 fw-semibold ">Kredi Bilgileri</h2>
  
    <table class="col-10 table table-bordered border-warning">
    <tbody class="fs-3 m-3">
      <tr>
        <th scope="row">Kredi Miktarı</th>
        <td>${tutar.value} ₺</td>
        <th>Kredi Tipi</th>
        <td>${kredi_input.value}</td>
      </tr>
      <tr>
        <th scope="row">Vade</th>
        <td>${vade.value}</td>
        <th>Faiz Oranı</td>
        <td>${oran}</td>
      </tr>
      <tr>
        <th scope="row">Toplam Tutar</th>
        <td>${(taksit_tutari * vade.value).toFixed(2)} ₺</td>
        <th>Taksit Tutarı</td>
        <td>${taksit_tutari.toFixed(2)} ₺</td>
      </tr>
    </tbody>
  </table>
`;
});
