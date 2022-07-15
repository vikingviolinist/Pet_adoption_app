import { FunctionComponent } from "react";
import Pet from "./Pet";
import { Pet as PetType } from "./APIResponsesTypes";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div className="p-10 mb-5 w-full bg-red-100 rounded-lg">
      {!pets.length ? (
        <h1 className="font-bold">No Pets Found</h1>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => {
            return (
              <Pet
                animal={pet.animal}
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                images={pet.images}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
