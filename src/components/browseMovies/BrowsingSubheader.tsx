type BrowsingSubheaderProps = {
  browsingSubheaderTitle: string;
};

function BrowsingSubheader(props: BrowsingSubheaderProps) {
  return (
    <div className="browsing-subheader-container">
      <div className="browsing-subheader-title">
        <h1 id="subheader-title-inner-content">{props.browsingSubheaderTitle}</h1>
      </div>
    </div>
  );
}

export default BrowsingSubheader;