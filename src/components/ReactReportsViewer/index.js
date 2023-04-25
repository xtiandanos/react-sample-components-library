import {
  Select,
  Form,
  Row,
  Col,
  DatePicker,
  Button,
  Space,
  Empty,
  Skeleton,
} from "antd";

export const getDataUrl = (blob) => {
  const file = new Blob([blob], { type: "application/pdf" });
  return URL.createObjectURL(file);
};

const React = require("react");

export default function ReactReportsViewer({
  handleSubmit,
  imageReportPathname,
  initialValues,
  isLoading,
  rCCodeList,
  reportNameList,
  reportTypeList,
  setInitialValues,
}) {
  const [form] = Form.useForm();
  const displayReportNameDropdownList = (list) => {
    return (
      <Form.Item label="Report Name :" name="reportName">
        <Select
          options={list.map((item) => ({
            value: item.value,
            label: item.value,
          }))}
          onChange={(_value) => {
            setInitialValues(form.getFieldsValue());
          }}
        />
      </Form.Item>
    );
  };

  const displayRCCodeDropdownList = (list) => {
    return (
      <Form.Item label="RC Code :" name="rCCode">
        <Select
          options={list.map((item) => ({
            value: item.value,
            label: item.value,
          }))}
          onChange={(_value) => {
            setInitialValues(form.getFieldsValue());
          }}
        />
      </Form.Item>
    );
  };

  const displayReportTypeDropdownList = (list) => {
    return (
      <Form.Item label="Report Type :" name="reportType">
        <Select
          options={list.map((item) => ({
            value: item.referenceCode,
            label: item.displayValue,
          }))}
          onChange={(_value) => {
            setInitialValues(form.getFieldsValue());
          }}
        />
      </Form.Item>
    );
  };

  const displayReportDate = () => {
    return (
      <Form.Item label="Date :" name="date">
        <DatePicker
          onChange={(_date, dateString) => {
            const fieldsValue = form.getFieldsValue();
            setInitialValues({ ...fieldsValue, date: dateString });
          }}
        />
      </Form.Item>
    );
  };
  return (
    <React.Fragment>
      <Row>
        <h1>Reports Viewer</h1>
      </Row>
      <Row>
        <Col span={8} className="test">
          {isLoading ? (
            <Skeleton />
          ) : (
            <section className="code-box">
              <Form
                form={form}
                initialValues={initialValues}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {reportTypeList
                  ? displayReportTypeDropdownList(reportTypeList)
                  : null}
                {reportNameList
                  ? displayReportNameDropdownList(reportNameList)
                  : null}
                {rCCodeList ? displayRCCodeDropdownList(rCCodeList) : null}
                {displayReportDate()}
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      handleSubmit && handleSubmit();
                    }}
                    disabled={
                      reportNameList?.length === 0 &&
                      initialValues.reportType === ""
                    }
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </section>
          )}
        </Col>

        <Col span={16}>
          {/* {imageReportPathname && <Worker workerUrl={imageReportPathname} />} */}

          {imageReportPathname ? (
            <iframe
              title="Reports View"
              src={`${getDataUrl(imageReportPathname)}#toolbar=0&view=fitH`}
              height="600px"
              width="100%"
            />
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 400 }}
            />
          )}

          <Row>
            <Col span={24}>
              <div className="space-align-container">
                <Space align="end">
                  <Button type="primary">Cancel</Button>
                  <Button type="primary">Print</Button>
                </Space>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
