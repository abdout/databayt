import React, { useState, useEffect } from "react";

const Location = (props: { location: string; setLocation: (value: string) => void }) => {
  const [type, setType] = useState("text");

  useEffect(() => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(urlPattern.test(props.location)) {
      setType("url");
    } else {
      setType("text");
    }
  }, [props.location]);

  return (
    <div>
      <input
        type={type}
        value={props.location}
        onChange={(e) => props.setLocation(e.target.value)}
        className="p-[10px] w-[280px] bg-[#fcfcfc] border border-[#818080] hover:border-black"
        style={{ fontWeight: "300", letterSpacing: "1px"}}
        placeholder="Location"
      />
    </div>
  );
};

export default Location;