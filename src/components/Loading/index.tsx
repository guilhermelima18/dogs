import { ThreeDots } from "react-loader-spinner";
import { LoadingWrapper, BoxLoading } from "./styles";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <BoxLoading>
        <ThreeDots width="50" height="50" color="#333" ariaLabel="loading" />
      </BoxLoading>
    </LoadingWrapper>
  );
};
