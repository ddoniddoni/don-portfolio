export default function Phone() {
  return (
    <section className="phone">
      <h2 className="hidden">Phone</h2>
      <div className="top">
        <div className="agency">SKT</div>
        <div className="notch"></div>
        <div className="status">
          <span>상태창</span>
          <span>wifi</span>
          <span>배터리</span>
        </div>
      </div>
      <div className="screen">
        <div className="content"></div>
      </div>
    </section>
  );
}
