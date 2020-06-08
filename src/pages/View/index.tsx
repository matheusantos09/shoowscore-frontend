import React, { useState } from "react";

import Container from "@material-ui/core/Container";

import LoaderCam from "../../components/LoaderCam";

const View = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [content, setContent] = useState();

  return (
    <>
      <div>
        <main>
          <Container maxWidth="sm">

            {loading ? <LoaderCam/> : null}

            <pre>
              {content}
            </pre>

          </Container>
        </main>
      </div>
    </>
  )
}

export default View
