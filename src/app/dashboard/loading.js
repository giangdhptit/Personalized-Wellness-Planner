import CircularLoader from "@/shared/components/loader/circularloader";

export default function Loading() {
  return (
    <CircularLoader
      wrapperSx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    />
  );
}
