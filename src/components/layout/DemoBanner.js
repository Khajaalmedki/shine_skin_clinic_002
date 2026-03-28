export default function DemoBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 
    bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 
    text-white shadow-sm">

      <p className="text-center text-sm py-2 font-medium">
        Demo website by{" "}
        <a
          href="https://webnexora.com"
          target="_blank"
          className="font-semibold underline"
        >
          Webnexora.com
        </a>
      </p>

    </div>
  );
}