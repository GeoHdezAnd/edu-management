type Props = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="font-light text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
};

export default Header;
