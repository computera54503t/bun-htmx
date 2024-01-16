export function CardItem(props: {
  title: string;
  url?: string;
  image?: string;
}) {
  const title = props.title;

  return (
    <a
      href={props.url || "#"}
      target="_blank"
      className="card w-44 sm:w-48 bg-base-100 shadow-xl"
    >
      <div
        className={`badge badge-success badge-xs right-3 absolute top-3`}
      ></div>

      <figure className="px-3 pt-6 sm:px-6 sm:pt-6">
        <div className="h-28 sm:h-32 flex items-center">
          <img
            src={
              props.image ||
              "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/selfhosted.png"
            }
            alt={title}
            className="rounded-xl w-28 sm:w-32 "
          />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-lg sm:text-xl uppercase">{title}</h2>
      </div>
    </a>
  );
}
