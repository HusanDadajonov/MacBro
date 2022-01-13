let macBook = {
    gold: [
      'https://cdn.macbro.uz/macbro/13131aa5-c6f7-4bef-8518-e92be1db4ad8',
      'https://cdn.macbro.uz/macbro/55c4aad5-3bbe-48b4-9074-f6b387eb37c2',
      'https://cdn.macbro.uz/macbro/c503bb8d-8e71-44d5-81a7-3ec067ce2328',
      'https://cdn.macbro.uz/macbro/643ce8b1-d06f-4fd5-84f2-838bc17b7b9f',
      'https://cdn.macbro.uz/macbro/e970817f-ce10-4620-bc8b-343c26e0ad05'
    ],
    silver: [
     'https://cdn.macbro.uz/macbro/271ebc90-5018-4636-a3ce-4a96ba1aca36',
     'https://cdn.macbro.uz/macbro/d015e206-9a55-4fe3-a7f9-749889ee16e1',
     'https://cdn.macbro.uz/macbro/cf0894d4-199a-47e8-ae41-54ac5bd6517f',
     'https://cdn.macbro.uz/macbro/5862b288-7fd8-4589-83d0-45f9c2a81abc',
     'https://cdn.macbro.uz/macbro/24086655-8b18-481b-8261-b6c70a0fb9d7'
    ],
    gray: [
     'https://cdn.macbro.uz/macbro/97d5997d-bdb3-43c6-b417-c44b5a0c75a3',
     'https://cdn.macbro.uz/macbro/abf793d6-19be-47bb-809d-adfc4314811c',
     'https://cdn.macbro.uz/macbro/7873cda1-1854-4524-a919-07e34576cb08',
     'https://cdn.macbro.uz/macbro/4931c161-2138-4976-9784-47f4a6f580e6',
     'https://cdn.macbro.uz/macbro/c190d5ec-36f5-4046-9818-133de39f4df6'
    ]
  }



class Calc{
  static pow(a,b){
    return a**b;
  }

  static arrSum(arr){
    let sum = arr.reduce((a,b) => a + b);
    return sum;
  }
  static
}

console.log(Calc.pow(4,2));

let arr = [32,3,2,5,3,2];

console.log(Calc.arrSum(arr));