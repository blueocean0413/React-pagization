const ArticleItem = ({ title, description }) => {
  return (
    <div className="w-full h-28 rounded-sm">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default ArticleItem;
