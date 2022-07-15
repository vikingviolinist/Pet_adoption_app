import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import { Animal, Pet, PetAPIResponse, Theme } from "./APIResponsesTypes";
import { useSelector, useDispatch } from "react-redux";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";
import { RootState } from "./store";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const animal = useSelector((state: RootState) => state.animal);
  const location = useSelector(({ location }) => location);
  const breed = useSelector(({ breed }) => breed);
  const theme = useSelector(({ theme }) => theme);
  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;

    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12 flex items-start flex-col sm:flex-row gap-5">
      <form
        className="p-10 rounded-lg bg-red-100 shadow-lg flex flex-col justify-center items-center gap-5 w-full sm:w-2/5"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            className="w-60 block rounded"
            type="text"
            id="location"
            value={location as string}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className="w-60 block rounded cursor-pointer"
            id="animal"
            value={animal}
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value as Animal));
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value as Animal));
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            className="w-60 block rounded cursor-pointer disabled:opacity-50 disabled:cursor-default"
            disabled={!breeds.length}
            id="breed"
            value={breed as string}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            className="w-60 block rounded cursor-pointer"
            value={theme as Theme}
            onChange={(e) => dispatch(changeTheme(e.target.value as Theme))}
            onBlur={(e) => dispatch(changeTheme(e.target.value as Theme))}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme as Theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
