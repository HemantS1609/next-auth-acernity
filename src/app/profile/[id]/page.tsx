export default function profileDetailPage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Detail</h1>
      <hr />
      <p className="text-4xl">
        Profile Detail Page
        <span className="p-2 rounded bg-orange-400 ms-5">{params?.id}</span>
      </p>
    </div>
  );
}
