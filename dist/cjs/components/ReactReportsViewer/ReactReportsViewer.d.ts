/// <reference types="react" />
interface ReportTypeList {
    displayValue: string;
    id: number;
    referenceCode: string;
    type: string;
    validUntilDate: string;
}
interface ReportNameList {
    id: string;
    value: string;
}
interface RCCodeList {
    id: string;
    value: string;
}
interface InitialValues {
    reportType: string;
    reportName: string;
    rCCode: string;
}
interface Props {
    handleSubmit: () => void;
    imageReportPathname?: string;
    initialValues: InitialValues;
    isLoading: boolean;
    rCCodeList?: RCCodeList[];
    reportNameList?: ReportNameList[];
    reportTypeList?: ReportTypeList[];
    setInitialValues: (args: InitialValues) => void;
}
export declare const getDataUrl: (blob: BlobPart) => string;
declare const ReactReportsViewer: ({ handleSubmit, imageReportPathname, initialValues, isLoading, rCCodeList, reportNameList, reportTypeList, setInitialValues }: Props) => JSX.Element;
export default ReactReportsViewer;
