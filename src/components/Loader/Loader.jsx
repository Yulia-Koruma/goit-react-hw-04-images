import { Hearts } from "react-loader-spinner";


export const Loader = () => {
    return (
        <div>
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
        </div>
    )
}