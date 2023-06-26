import React, { useRef } from 'react';
import moment from 'moment';
import gmlawLogo from '../../../assets/images/gmlawLogo.png';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: '200px',
    marginBottom: '10px',
  },
});

const Checkbox = ({ isChecked, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View
      style={{
        width: 10,
        height: 10,
        marginRight: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: isChecked ? 'black' : 'white',
      }}
    />
    <Text style={{ fontSize: '14px' }}>{label}</Text>
  </View>
);

const RadioButton = ({ isSelected, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View
      style={{
        width: 10,
        height: 10,
        marginRight: 5,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: isSelected ? 'black' : 'white',
      }}
    />
    <Text style={{ fontSize: '14px' }}>{label}</Text>
  </View>
);

const FormDataPreview = ({ data }) => {
  const pdfContainerRef = useRef();

  const handleDownloadPDF = () => {
    const pdfContainer = pdfContainerRef.current;
    const blob = new Blob([pdfContainer], { type: 'application/pdf' });
    saveAs(blob, 'form_data_preview.pdf');
  };
  const formateDate = (dd) => {
    const d = new Date(dd);
    const year = moment(d).format('YYYY');
    const month = moment(d).format('MM');
    const day = moment(d).format('DD');
    return year + '-' + month + '-' + day;
  };

  return (
    <div className="absolute top-0 left-0 bg-white w-full z-[100]">
      <div className="p-5">
        <button
          onClick={handleDownloadPDF}
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Download as PDF
        </button>
      </div>

      <div className="flex justify-center" ref={pdfContainerRef}>
        <PDFViewer width={'100%'} height={800}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Image style={styles.image} src={gmlawLogo} />
                <Text style={{ fontSize: '24px' }}>YOUR INFORMATION</Text>
                <Text style={{ fontSize: '18px' }}>Your Name</Text>
                <Text style={{ fontSize: '14px' }}>First Name: Muhammad</Text>
                <Text style={{ fontSize: '14px' }}>Middle Name: Khurram</Text>
                <Text style={{ fontSize: '14px' }}>Last Name: Iqbal</Text>
                <Text style={{ fontWeight: '800', marginTop: '10px' }}>
                  Mailing Address
                </Text>
                <Text style={{ fontSize: '14px' }}>Address Line 1: </Text>
                <Text style={{ fontSize: '14px' }}>Address Line 2:</Text>
                <Text style={{ fontSize: '14px' }}>City:</Text>
                <Text style={{ fontSize: '14px' }}>State:</Text>
                <Text style={{ fontSize: '14px' }}>Zip Code:</Text>
                <Text style={{ fontSize: '14px', marginTop: '5px' }}>
                  Email:
                </Text>
                <Text style={{ fontSize: '14px', marginTop: '5px' }}>
                  Gender:
                </Text>
                <Text style={{ fontSize: '14px', marginTop: '5px' }}>
                  State of Residency:
                </Text>
                <Text style={{ fontSize: '14px', marginTop: '5px' }}>
                  County of Residency:
                </Text>
                <Text style={{ fontSize: '14px', marginTop: '5px' }}>
                  Country of Citizenship:
                </Text>
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.estatePlanningPackages.question}
                </Text>
                {data.personalInfo.estatePlanningPackages.options.map(
                  (item, i) => (
                    <Checkbox isChecked={item.value} label={item.label} />
                  )
                )}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.individualEstatePlanningDocuments.question}
                </Text>
                {data.personalInfo.individualEstatePlanningDocuments.options.map(
                  (item, i) => (
                    <Checkbox isChecked={item.value} label={item.label} />
                  )
                )}
              </View>
            </Page>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.specialIrrevocableTrusts.question}
                </Text>
                {data.personalInfo.specialIrrevocableTrusts.options.map(
                  (item, i) => (
                    <Checkbox isChecked={item.value} label={item.label} />
                  )
                )}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.trustTransferDocuments.question}
                </Text>
                {data.personalInfo.trustTransferDocuments.options.map(
                  (item, i) => (
                    <Checkbox isChecked={item.value} label={item.label} />
                  )
                )}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.creatingTrustType.question}
                </Text>
                {data.personalInfo.creatingTrustType.options.map((item, i) => (
                  <Checkbox isChecked={item.value} label={item.label} />
                ))}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.initialTrustee.question}
                </Text>
                {data.personalInfo.initialTrustee.options.map((item, i) => (
                  <RadioButton isChecked={item.value} label={item.label} />
                ))}
                <Text style={{ fontSize: '24px', marginTop: '10px' }}>
                  FAMILY
                </Text>
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.maritalStatus.question}
                </Text>
                {data.personalInfo.maritalStatus.options.map((item, i) => (
                  <RadioButton isChecked={item.value} label={item.label} />
                ))}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.livingChildren.question}
                </Text>
                {data.personalInfo.livingChildren.options.map((item, i) => (
                  <Checkbox isChecked={item.value} label={item.label} />
                ))}
              </View>
            </Page>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                {!data.personalInfo.livingChildren.options[0].value && (
                  <div>
                    <Text className="mb-1 mt-3 font-bold">
                      Living Children Information
                    </Text>
                    {data.personalInfo.livingChildrenInformation.map(
                      (item, i) => (
                        <View key={i} style={{ marginTop: '10px' }}>
                          <Text>Child {i + 1}</Text>
                          <Text style={{ fontSize: '14px' }}>
                            First Name: {item.firstName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Middle Name: {item.middleName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Last Name: {item.lastName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Date of Birth: {formateDate(item.dateOfBirth)}
                          </Text>
                        </View>
                      )
                    )}
                  </div>
                )}
                <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                  {data.personalInfo.deceasedChildren.question}
                </Text>
                {data.personalInfo.deceasedChildren.options.map((item, i) => (
                  <Checkbox isChecked={item.value} label={item.label} />
                ))}
                {!data.personalInfo.deceasedChildren.options[0].value && (
                  <div>
                    <Text className="mb-1 mt-3 font-bold">
                      Deceased Children Information
                    </Text>
                    {data.personalInfo.deceasedChildrenInformation.map(
                      (item, i) => (
                        <View key={i} style={{ marginTop: '10px' }}>
                          <Text>Child {i + 1}</Text>
                          <Text style={{ fontSize: '14px' }}>
                            First Name: {item.firstName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Middle Name: {item.middleName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Last Name: {item.lastName}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Date of Birth: {formateDate(item.dateOfBirth)}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            Date of Death: {formateDate(item.dateOfDeath)}
                          </Text>
                          <Text style={{ fontSize: '14px' }}>
                            {
                              item
                                .did_this_child_die_leaving_any_children_or_grandchildren
                                .question
                            }
                          </Text>
                          {item.did_this_child_die_leaving_any_children_or_grandchildren.options.map(
                            (item, i) => (
                              <RadioButton
                                isChecked={item.value}
                                label={item.label}
                              />
                            )
                          )}
                        </View>
                      )
                    )}
                    <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                      {
                        data.personalInfo
                          .how_many_successor_Trustees_do_you_want_to_name
                          .question
                      }
                    </Text>
                    {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name.options.map(
                      (item, i) => (
                        <RadioButton
                          isChecked={item.value}
                          label={item.label}
                        />
                      )
                    )}
                  </div>
                )}
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default FormDataPreview;
