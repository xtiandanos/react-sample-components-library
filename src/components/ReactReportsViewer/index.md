```jsx
import ReactReportsViewer from "./index.js";
<ReactReportsViewer
  handleSubmit={function () {
    console.log("handleSubmit");
  }}
  imageReportPathname={"https://r3-system-api-4cb4n4kxsq-as.a.run.app/fetchPdf"}
  initialValues={{
    reportName: "",
    reportType: "",
    rCCode: "",
  }}
  isLoading={false}
  reportTypeList={[
    {
      id: "1",
      value: "value 1",
    },
    {
      id: "2",
      value: "value 2",
    },
  ]}
  reportNameList={[
    {
      id: "1",
      value: "name 1",
    },
    {
      id: "2",
      value: "name 2",
    },
    {
      id: "3",
      value: "name 3",
    },
  ]}
  rCCodeList={[
    {
      id: "1",
      value: "RC Code 1",
    },
    {
      id: "2",
      value: "RC Code 2",
    },
    {
      id: "3",
      value: "RC Code 3",
    },
    {
      id: "4",
      value: "RC Code 4",
    },
  ]}
  setInitialValues={function () {
    console.log("setInitialValues");
  }}
/>;
```
