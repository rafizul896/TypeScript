{
  // problem-1
  function repeatString(str: string, num: number): string {
    return str.repeat(num);
  }

  // problem-2
  function findLargestNumber(numbers: number[]): number {
    return Math.max(...numbers);
  }

  // problem-3
  const filterEvenNumbers = (nubers: number[]): number[] => {
    return nubers.filter((num: number) => num % 2 == 0);
  };

  // problem-4
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  // problem-5
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  function calculateAverageGrade(std: Student) {
    return (
      std.grades.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / std.grades.length
    );
  }

  calculateAverageGrade({ name: "user", age: 222, grades: [11, 22] });

  // problem-6
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function isRecentBook(book: Book): boolean {
    const currentYear = new Date().getFullYear();
    return (
      currentYear - book.publishedYear <= 5 && book.publishedYear <= currentYear
    );
  }

  console.log(
    isRecentBook({
      title: "The Python Mater",
      author: "Mr. X",
      publishedYear: 2025,
    })
  );

  // problem-7
  function logString(input: unknown): void {
    if (typeof input === "string") {
      console.log(input);
    } else {
      console.error("Error: This input is not a String");
    }
  }

  logString("Hey");

  // problem-8
  class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    displayInfo() {
      console.log(
        `This car brand name is ${this.brand} model name is ${this.model} and publishYear ${this.year}`
      );
    }
  }

  const car1 = new Car("BMW", "K90", 2020);
  car1.displayInfo();
  console.log(car1);

  // problem-9
  {
    const validateKeys = <T extends object>(
      obj: T,
      keys: (keyof T)[]
    ): boolean => {
      for (const key of keys) {
        if (!(key in obj)) {
          return false;
        }
      }
      return true;
    };
  }

  // problem-10
  {
    class Car {
      make: string;
      model: string;
      year: number;

      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }

      getCarAge() {
        const currentYear = new Date().getFullYear();
        const gapYear = currentYear - this.year;

        console.log(`${gapYear} (assuming current year is ${currentYear})`);
      }
    }
  }

  // problem-11
  {
    type Circle = {
      shape: "circle";
      radius: number;
    };

    type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
    };

    const calculateShapeArea = (shapeArea: Circle | Rectangle): number => {
      if (shapeArea.shape === "circle") {
        return parseFloat(
          (Math.PI * shapeArea.radius * shapeArea.radius).toFixed(2)
        );
      } else if (shapeArea.shape === "rectangle") {
        return shapeArea.height * shapeArea.width;
      } else {
        return 0;
      }
    };
  }

  // problem-12
  {
    function removeDuplicates(arr: number[]): number[] {
      return [...new Set(arr)];
    }
  }
}
