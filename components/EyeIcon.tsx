type Props = {
  color?: string;
  size?: number;
};

export const EyeIcon = (props: Props) => {
  const fill = props.color ?? 'currentColor';
  const size = props.size ?? 24;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="view_outline_24" width={size} height={size}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          d="M12 4.6c5.2 0 10.4 4.237 10.4 7.4 0 3.163-5.2 7.4-10.4 7.4S1.6 15.163 1.6 12c0-3.163 5.2-7.4 10.4-7.4zm0 1.8c-4.278 0-8.6 3.522-8.6 5.6s4.322 5.6 8.6 5.6 8.6-3.522 8.6-5.6-4.322-5.6-8.6-5.6zm0 2.2a3.4 3.4 0 110 6.8 3.4 3.4 0 010-6.8zm0 1.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
          fill={fill}
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};
