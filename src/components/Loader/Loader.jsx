import { Hearts } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
    return (
        <LoaderContainer>
            <Hearts
          height="400"
          width="500"
          color="#e309d8"
          ariaLabel="hearts-loading"
          wrapperStyle={{
          }}
          wrapperClass=""
          visible={true}
          />
        </LoaderContainer>
    )
}