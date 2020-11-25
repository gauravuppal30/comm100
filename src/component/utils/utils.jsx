const jsonData = [
  {
    a: "xiao ming",
    b: "18",
    c: [
      {
        a: "Zootopia",
        b: 109,
        c: "tt2948356",
      },
      {
        a: "Hacksaw Ridge",
        b: 139,
        c: "tt2119532",
      },
      {
        a: "Kiminona",
        b: 106,
        c: "tt5311514",
      },
    ],
  },
  {
    a: "ming Xio",
    b: "28",
    c: [
      {
        a: "Zootopia",
        b: 109,
        c: "tt2948356",
      },
      {
        a: "Hacksaw Ridge",
        b: 139,
        c: "tt2119532",
      },
      {
        a: "Kiminona",
        b: 106,
        c: "tt5311514",
      },
    ],
  },
];

export default function getVisitors() {
    // useEffect(() => {
  //  getVisitorsAPI()
  // }, []);
  // const getVisitorsAPI = () => {
  //   fetch("https://run.mocky.io/v3/607776d8-51a3-4030-b7d5-647f5abf1772")
  //     .then((response) => {
  //       console.log("res", response);

  //       if (response && response.data) setVisitorsList(response.data);
  //     })
  //     .catch((error) => console.error("Visitors API Failed", error));
  // };

  const getSerializedSubData = (movies) => {
    let serializedMovieList = [];
    movies.forEach((movie) => {
      serializedMovieList = [
        ...serializedMovieList,
        {
          name: movie.a,
          duration: movie.b,
          IMDB: movie.c,
        },
      ];
    });
    return serializedMovieList;
  };

  let serializedList = [];

  jsonData.forEach((visitor) => {
    serializedList = [
      ...serializedList,
      {
        name: visitor.a,
        age: visitor.b,
        favoriteMovies: getSerializedSubData(visitor.c),
      },
    ];
  });

  return serializedList;
}
