import { classeConcreta } from "./classeConcreta";

const TestTemplateMethod = () => {
  const instancia = new classeConcreta();
  console.log("Primeiro Exemplo");
  console.log("----------------");
  instancia.template(
    "01234-567",
    "1234-5678-9012-3456",
    "0123",
    "456789",
    1,
    new Date("2023-11-30"),
    "BlueDragon87",
    "FireStorm23"
  );
  console.log("");

  console.log("Segundo Exemplo");
  instancia.template(
    "10001",
    "2468-1357-9753-8642",
    "0789",
    "987654",
    2,
    new Date("2023-11-01"),
    "GoldenTiger64",
    "SunsetRoar19"
  );
  console.log("");

  console.log("Terceiro Exemplo");
  instancia.template(
    "01234-567",
    "6543-2109-8765-4321",
    "0234",
    "345678",
    1,
    new Date("2022-11-30"),
    "BlueDragon87",
    "FireStorm23"
  );
  console.log("");
};

TestTemplateMethod();
