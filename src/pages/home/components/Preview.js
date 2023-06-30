import React, { useEffect, useRef } from 'react';
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
  PDFDownloadLink,
} from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
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

const RadioButton = ({ isChecked, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View
      style={{
        width: 10,
        height: 10,
        marginRight: 5,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: isChecked ? 'black' : 'white',
      }}
    />
    <Text style={{ fontSize: '14px' }}>{label}</Text>
  </View>
);

const FormDataPreview = ({ data, setPreviewOpen }) => {
  const pdfContainerRef = useRef();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // const handleDownloadPDF = () => {
  //   const pdfContainer = pdfContainerRef.current;
  //   const blob = new Blob([pdfContainer], { type: 'application/pdf' });
  //   saveAs(blob, 'form_data_preview.pdf');
  // };
  const formateDate = (dd) => {
    const d = new Date(dd);
    const year = moment(d).format('YYYY');
    const month = moment(d).format('MM');
    const day = moment(d).format('DD');
    return year + '-' + month + '-' + day;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', data);
  };

  const MyPdfDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* <Image style={styles.image} src={gmlawLogo} /> */}
          <Text style={{ fontSize: '24px' }}>YOUR INFORMATION</Text>
          <Text style={{ fontSize: '18px' }}>Your Name</Text>
          <Text style={{ fontSize: '14px' }}>
            First Name: {data?.personalInfo?.yourInfo?.firstName}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            Middle Name: {data?.personalInfo?.yourInfo?.middleName}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            Last Name: {data?.personalInfo?.yourInfo?.lastName}
          </Text>
          <Text style={{ fontWeight: '800', marginTop: '10px' }}>
            Mailing Address
          </Text>
          <Text style={{ fontSize: '14px' }}>
            Address Line 1: {data?.personalInfo?.yourInfo?.addressLine1}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            Address Line 2:{data?.personalInfo?.yourInfo?.addressLine2}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            City:{data?.personalInfo?.yourInfo?.city}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            State:{data?.personalInfo?.yourInfo?.state.value}
          </Text>
          <Text style={{ fontSize: '14px' }}>
            Zip Code: {data?.personalInfo?.yourInfo?.zipCode}
          </Text>
          <Text style={{ fontSize: '14px', marginTop: '5px' }}>
            Email:{data?.personalInfo?.yourInfo?.email}
          </Text>
          <Text style={{ fontSize: '14px', marginTop: '5px' }}>
            Gender: {data?.personalInfo?.yourInfo?.gender}
          </Text>
          <Text style={{ fontSize: '14px', marginTop: '5px' }}>
            State of Residency:
            {data?.personalInfo?.yourInfo?.stateOfResidency}
          </Text>
          <Text style={{ fontSize: '14px', marginTop: '5px' }}>
            County of Residency:{' '}
            {data?.personalInfo?.yourInfo?.countyOfResidency}
          </Text>
          <Text style={{ fontSize: '14px', marginTop: '5px' }}>
            Country of Citizenship:{' '}
            {data?.personalInfo?.yourInfo?.countryOfCitizenship}
          </Text>
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.estatePlanningPackages.question}
          </Text>
          {data.personalInfo.estatePlanningPackages.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.individualEstatePlanningDocuments.question}
          </Text>
          {data.personalInfo.individualEstatePlanningDocuments.options.map(
            (item, i) => (
              <Checkbox key={i} isChecked={item.value} label={item.label} />
            )
          )}
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.specialIrrevocableTrusts.question}
          </Text>
          {data.personalInfo.specialIrrevocableTrusts.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.trustTransferDocuments.question}
          </Text>
          {data.personalInfo.trustTransferDocuments.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.creatingTrustType.question}
          </Text>
          {data.personalInfo.creatingTrustType.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
          ))}
          {data.personalInfo.creatingTrustType.options[0].value && (
            <>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                Creating your new revocable living trust.
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                {data.personalInfo.what_do_you_want_to_name_your_trust.question}
              </Text>
              {data.personalInfo.what_do_you_want_to_name_your_trust.options.map(
                (item, i) => (
                  <RadioButton
                    key={i}
                    isChecked={item.value}
                    label={item.label}
                  />
                )
              )}
            </>
          )}
          {data.personalInfo.creatingTrustType.options[1].value && (
            <>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                First, we need to collect some information about your existing
                trust
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                What is the name of your existing trust?
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .what_is_the_name_of_your_existing_trust
                }
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                What is the date you signed your existing trust?
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {formateDate(
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .what_is_the_date_you_signed_your_existing_trust
                )}
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                After you signed your trust, did you ever amend it?
              </Text>
              {data.personalInfo.first_we_need_to_collect_some_information_about_your_existing_trust.after_you_signed_your_trust_did_you_ever_amend_it.map(
                (item, i) => (
                  <RadioButton
                    key={i}
                    isChecked={item.value}
                    label={item.label}
                  />
                )
              )}
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                Locate the paragraph or section number in your existing trust
                agreement that allows you to make amendments to your trust write
                the location below.
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .locate_the_paragraph_or_section_number_in_your_existing_trust_agreement_that_allows_you_to_make_amendments_to_your_trust_write_the_location_below
                }
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                Have you amended your Trust before?
              </Text>
              {data.personalInfo.first_we_need_to_collect_some_information_about_your_existing_trust.have_you_amended_your_Trust_before.map(
                (item, i) => (
                  <RadioButton
                    key={i}
                    isChecked={item.value}
                    label={item.label}
                  />
                )
              )}
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                What month you will sign the document(s) you are creating?
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .what_month_you_will_sign_the_document_you_are_creating
                }
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                What month you will sign the document(s) you are creating?
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .what_month_you_will_sign_the_document_you_are_creating
                }
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                On what day of the month will you sign your documents
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Answer:{' '}
                {
                  data.personalInfo
                    .first_we_need_to_collect_some_information_about_your_existing_trust
                    .on_what_day_of_the_month_will_you_sign_your_documents
                }
              </Text>
            </>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.initialTrustee.question}
          </Text>
          {data.personalInfo.initialTrustee.options.map((item, i) => (
            <RadioButton key={i} isChecked={item.value} label={item.label} />
          ))}
          <Text style={{ fontSize: '24px', marginTop: '10px' }}>FAMILY</Text>
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.maritalStatus.question}
          </Text>
          {data.personalInfo.maritalStatus.options.map((item, i) => (
            <RadioButton key={i} isChecked={item.value} label={item.label} />
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.livingChildren.question}
          </Text>
          {data.personalInfo.livingChildren.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
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
              {data.personalInfo.livingChildrenInformation.map((item, i) => (
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
              ))}
            </div>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.deceasedChildren.question}
          </Text>
          {data.personalInfo.deceasedChildren.options.map((item, i) => (
            <Checkbox key={i} isChecked={item.value} label={item.label} />
          ))}
          {!data.personalInfo.deceasedChildren.options[0].value && (
            <div>
              <Text className="mb-1 mt-3 font-bold">
                Deceased Children Information
              </Text>
              {data.personalInfo.deceasedChildrenInformation.map((item, i) => (
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
                      <RadioButton isChecked={item.value} label={item.label} />
                    )
                  )}
                </View>
              ))}
            </div>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .question
            }
          </Text>
          {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name.options.map(
            (item, i) => (
              <RadioButton key={i} isChecked={item.value} label={item.label} />
            )
          )}
          {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
            .options[0].value && (
            <div>
              <Text style={{ fontSize: '24px' }}>Successor Trustee</Text>
              <Text style={{ fontSize: '14px' }}>
                First Name: {data?.personalInfo?.successorTrustee?.firstName}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Middle Name: {data?.personalInfo?.successorTrustee?.middleName}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Last Name: {data?.personalInfo?.successorTrustee?.lastName}
              </Text>
              <h3 className="mb-1 mt-2 font-bold">Address</h3>
              <Text style={{ fontSize: '14px' }}>
                Address Line 1:
                {data?.personalInfo?.successorTrustee?.addressLine1}{' '}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Address Line 2:
                {data?.personalInfo?.successorTrustee?.addressLine2}{' '}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                City:
                {data?.personalInfo?.successorTrustee?.city}{' '}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                State:
                {data?.personalInfo?.successorTrustee?.state.value}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                zipCode:
                {data?.personalInfo?.successorTrustee?.zipCode}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Email:
                {data?.personalInfo?.successorTrustee?.email}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Phone:
                {data?.personalInfo?.successorTrustee?.phone}
              </Text>
            </div>
          )}
          {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
            .options[1].value && (
            <div>
              <Text style={{ fontSize: '24px' }}>Successor Trustees</Text>
              {data.personalInfo.successorTrustees.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>
                    Successor Trustee {i + 1}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    First Name: {item.firstName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Middle Name: {item.middleName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Last Name: {item.lastName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Email: {item.email}</Text>
                  <Text style={{ fontSize: '14px' }}>Phone: {item.phone}</Text>
                </>
              ))}
            </div>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {
              data.personalInfo
                .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
                .question
            }
          </Text>
          {data.personalInfo.is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee.options.map(
            (item, i) => (
              <RadioButton key={i} isChecked={item.value} label={item.label} />
            )
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {data.personalInfo.do_you_want_to_make_any_specific_gifts.question}
          </Text>
          {data.personalInfo.do_you_want_to_make_any_specific_gifts.options.map(
            (item, i) => (
              <RadioButton key={i} isChecked={item.value} label={item.label} />
            )
          )}
          {data.personalInfo.do_you_want_to_make_any_specific_gifts.options[0]
            .value && (
            <>
              {data.personalInfo.gifts.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>Gift {i + 1}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Type of Gift: {item?.giftType}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Name of Individual: {item?.item?.nameOfIndividual}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Type of Gift:</Text>
                  {item.typeOfGift.map((item, i) => (
                    <RadioButton
                      key={i}
                      isChecked={item.value}
                      label={item.label}
                    />
                  ))}
                  {item.typeOfGift[0].value && (
                    <>
                      <Text style={{ fontSize: '14px' }}>
                        Cash Gift Amount: {item?.cashGiftAmount}
                      </Text>
                    </>
                  )}

                  {item.typeOfGift[1].value && (
                    <>
                      <Text style={{ fontSize: '14px' }}>
                        Describe the item of personal property:{' '}
                        {item?.describeTheItemOfPersonalProperty}
                      </Text>
                    </>
                  )}
                  <Text style={{ fontSize: '14px' }}>
                    Make any comments, remarks or your reason for the gift
                    (Optional):{' '}
                    {item?.makeAnyCommentsRemarksOrYourReasonForTheGift}
                  </Text>
                </>
              ))}
            </>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            {
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.question
            }
          </Text>
          {data.personalInfo.first_do_you_want_to_make_any_charitable_donations.options.map(
            (item, i) => (
              <RadioButton key={i} isChecked={item.value} label={item.label} />
            )
          )}
          {data.personalInfo.first_do_you_want_to_make_any_charitable_donations
            .options[0].value && (
            <>
              <Text style={{ fontSize: '24px' }}>Charitable Donations</Text>
              {data.personalInfo.charitableDonations1.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>Charity {i + 1}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Name of Charity: {item?.nameOfCharity}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Percentage of Residue: {item?.percentageOfResidue}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Charity's Address</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Address Line 1:{item?.addressLine1}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Address Line 2:{item?.addressLine2}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>City:{item?.city}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    State:{item?.state.value}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    zipCode:{item?.zipCode}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Purpose for the gift:{item?.purposeForTheGift}
                  </Text>
                </>
              ))}
            </>
          )}
          {data.personalInfo.beneficiaries.map((item, i) => (
            <>
              <Text style={{ fontSize: '24px' }}>REMAINDER BENEFICIARIES</Text>
              <Text style={{ fontSize: '18px' }}>Beneficiary {i + 1}</Text>
              <Text style={{ fontSize: '14px' }}>
                First Name: {item?.firstName}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Last Name: {item?.lastName}
              </Text>
              <Text style={{ fontSize: '14px' }}>City: {item?.city}</Text>
              <Text style={{ fontSize: '14px' }}>
                State: {item?.state.value}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Beneficiary relationship to you:{' '}
                {item?.Beneficiary_relationship_to_you}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                percentageShare: {item?.percentageShare}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Any statements that you wish to make (optional):{' '}
                {item?.any_statements_that_you_wish_to_make}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                What happens if this person predeceases you?
              </Text>
              {item.what_happens_if_this_person_predeceases_you.map(
                (item, i) => (
                  <RadioButton
                    key={i}
                    isChecked={item.value}
                    label={item.label}
                  />
                )
              )}
              <Text style={{ fontSize: '14px' }}>
                Will this beneficiary's share be given outright,distributed at
                certain time intervals, or held in trust for his or her life:{' '}
                {item?.will_this_beneficiarys_share_be_given_outright}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Pick your age for disbursement:{' '}
                {item?.pick_your_age_for_disbursement}
              </Text>
            </>
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            Contingent Residue Distribution
          </Text>
          {data.personalInfo.contingent_Residue_Distribution.map((item, i) => (
            <RadioButton key={i} isChecked={item.value} label={item.label} />
          ))}
          {data.personalInfo.contingent_Residue_Distribution[1].value && (
            <>
              {data.personalInfo.beneficiaries1.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>Beneficiary {i + 1}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    First Name: {item?.firstName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Last Name: {item?.lastName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>City: {item?.city}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    State: {item?.state.value}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Beneficiary relationship to you:{' '}
                    {item?.Beneficiary_relationship_to_you}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    percentageShare: {item?.percentageShare}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Any statements that you wish to make (optional):{' '}
                    {item?.any_statements_that_you_wish_to_make}
                  </Text>
                </>
              ))}
            </>
          )}
          {data.personalInfo.contingent_Residue_Distribution[2].value && (
            <>
              <Text style={{ fontSize: '24px' }}>Charitable Donations</Text>
              {data.personalInfo.charitableDonations.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>Charity {i + 1}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Name of Charity: {item?.nameOfCharity}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Percentage of Residue: {item?.percentageOfResidue}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Charity's Address</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Address Line 1:{item?.addressLine1}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Address Line 2:{item?.addressLine2}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>City:{item?.city}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    State:{item?.state.value}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    zipCode:{item?.zipCode}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Purpose for the gift:{item?.purposeForTheGift}
                  </Text>
                </>
              ))}
            </>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            Do you want the personal representative(s) under your Pour-Over-Will
            to be the same as your successor trustee(s)
          </Text>
          {data.documentMenu.personalRepresentativeQ.options.map((item, i) => (
            <RadioButton key={i} isChecked={item.value} label={item.label} />
          ))}
          {data.documentMenu.personalRepresentativeQ.options[1].value && (
            <div>
              {data.documentMenu.personalRepresentatives.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>
                    Personal Representative {i + 1}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    First Name: {item?.firstName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Last Name: {item?.lastName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Email: {item?.email}</Text>
                  <Text style={{ fontSize: '14px' }}>Phone: {item?.phone}</Text>
                </>
              ))}
            </div>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            Do you want the attorney(s)-in-fact under your Durable Power of
            Attorney to be the same as your successor trustee(s)
          </Text>
          {data.preliminaryTrustInfo.question.options.map((item, i) => (
            <RadioButton key={i} isChecked={item.value} label={item.label} />
          ))}
          {data.preliminaryTrustInfo.question.options[1].value && (
            <>
              {data.preliminaryTrustInfo.attorneyInFacts.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>
                    Attorney-in-Fact {i + 1}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    First Name: {item?.firstName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Last Name: {item?.lastName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>Email: {item?.email}</Text>
                  <Text style={{ fontSize: '14px' }}>Phone: {item?.phone}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    Relationship: {item?.relationship}
                  </Text>
                </>
              ))}
            </>
          )}
          {data.familyInfo.healthCareAgents.map((item, i) => (
            <>
              <Text style={{ fontSize: '18px' }}>
                Health Care Agent {i + 1}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                First Name: {item?.firstName}
              </Text>
              <Text style={{ fontSize: '14px' }}>
                Last Name: {item?.lastName}
              </Text>
              <Text style={{ fontSize: '14px' }}>Email: {item?.email}</Text>
              <Text style={{ fontSize: '14px' }}>Phone: {item?.phone}</Text>
              <Text style={{ fontSize: '14px' }}>
                Relationship: {item?.relationship}
              </Text>
            </>
          ))}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            Are there individuals that you want to identify as your HIPAA
            agents?
          </Text>
          {data.successorTrustees.question.options.map((item, i) => (
            <RadioButton isChecked={item.value} label={item.label} />
          ))}
          {data.successorTrustees.question.options[0].value && (
            <>
              <Text style={{ fontSize: '24px' }}>HIPAA Agents</Text>
              {data.successorTrustees.hIPAAAgents.map((item, i) => (
                <>
                  <Text style={{ fontSize: '18px' }}>HIPAA Agent {i + 1}</Text>
                  <Text style={{ fontSize: '14px' }}>
                    First Name: {item?.firstName}
                  </Text>
                  <Text style={{ fontSize: '14px' }}>
                    Last Name: {item?.lastName}
                  </Text>
                </>
              ))}
            </>
          )}
          <Text style={{ fontSize: '18px', marginTop: '10px' }}>
            Do you have any children under 18 years of age?
          </Text>
          {data.specialDistributions.question1.options.map((item, i) => (
            <RadioButton isChecked={item.value} label={item.label} />
          ))}
          {data.specialDistributions.question1.options[0].value && (
            <>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                If you have any children under the age of 18 you should name a
                guardian (or co-Guardians) to take care of them if you cannot.
                Failure to make arrangements in this regard will leave the
                decision up to the government.
              </Text>
              <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                Do you want to name a guardian for your minor child or minor
                children?
              </Text>
              {data.specialDistributions.question2.options.map((item, i) => (
                <RadioButton
                  key={i}
                  isChecked={item.value}
                  label={item.label}
                />
              ))}
              {data.specialDistributions.question2.options[0].value && (
                <>
                  <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                    Do you want to nominate an individual or a couple as
                    Guardian of your minor child or children?
                  </Text>
                  {data.specialDistributions.question3.options.map(
                    (item, i) => (
                      <RadioButton
                        key={i}
                        isChecked={item.value}
                        label={item.label}
                      />
                    )
                  )}
                  {data.specialDistributions.question3.options[0].value && (
                    <>
                      <Text style={{ fontSize: '24px' }}>SINGLE GUARDIANS</Text>
                      <Text style={{ fontSize: '14px' }}>
                        Name as many guardians as you want. Each one named will
                        act in succession if the prior guardian cannot or will
                        not serve.
                      </Text>
                      <>
                        {data.specialDistributions.guardians.map((item, i) => (
                          <>
                            <Text style={{ fontSize: '18px' }}>
                              Guardian {i + 1}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              First Name: {item?.firstName}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Last Name: {item?.lastName}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Relationship of Guardian to you:{' '}
                              {item?.relationship_of_Guardian_to_you}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Guardian's Address
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Address Line 1: {item?.addressLine1}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Address Line 2: {item?.addressLine2}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              City: {item?.city}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              State: {item?.state.value}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              zipCode: {item?.zipCode}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Email: {item?.email}
                            </Text>
                            <Text style={{ fontSize: '14px' }}>
                              Phone: {item?.phone}
                            </Text>
                          </>
                        ))}
                      </>
                    </>
                  )}
                  {data.specialDistributions.question3.options[1].value && (
                    <>
                      <Text style={{ fontSize: '24px' }}>
                        Co-Guardian Informations
                      </Text>
                      <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                        Co Guardian One
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        First Name:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_First_Name
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Last Name:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_Last_Name
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Relationship of co-Guardian One to you:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_One_to_you
                        }
                      </Text>
                      <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                        Co-Guardian Two
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        First Name:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_First_Name
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Last Name:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_Last_Name
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Relationship of co-Guardian Two to you:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_Two_to_you
                        }
                      </Text>
                      <Text style={{ fontSize: '18px', marginTop: '10px' }}>
                        Co Guardian's Address
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Address Line 1:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine1
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Address Line 2:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine2
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        City:{' '}
                        {data.specialDistributions.co_GuardianInformation?.city}
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        State:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.state.value
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        zipCode:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.zipCode
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Email:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.email
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Phone:{' '}
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.phone
                        }
                      </Text>
                      <Text style={{ fontSize: '14px' }}>
                        Which co Guardian has priority should the couple divorce
                        or otherwise split up?
                      </Text>
                      {data.specialDistributions.question4.options.map(
                        (item, i) => (
                          <RadioButton
                            key={i}
                            isChecked={item.value}
                            label={item.label}
                          />
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
          <Text style={{ fontSize: '24px', marginTop: '10px' }}>
            Personal Representatives
          </Text>
          {data.remainingDistributions.personalRepresentatives.map(
            (item, i) => (
              <>
                <Text style={{ fontSize: '18px' }}>
                  Personal Representative {i + 1}
                </Text>
                <Text style={{ fontSize: '14px' }}>
                  First Name: {item?.firstName}
                </Text>
                <Text style={{ fontSize: '14px' }}>
                  Last Name: {item?.lastName}
                </Text>
                <Text style={{ fontSize: '14px' }}>Email: {item?.email}</Text>
                <Text style={{ fontSize: '14px' }}>Phone: {item?.phone}</Text>
              </>
            )
          )}
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="absolute top-0 left-0 bg-white w-full z-[100]">
      <div className="flex justify-end h-[60px] items-center px-5">
        {/* <div className="text-black">
          <PDFDownloadLink document={<MyPdfDocument />} fileName="somename.pdf">
            {({ _blob, _url, loading, _error }) =>
              loading ? 'Loading document...' : 'Download Preview'
            }
          </PDFDownloadLink>
        </div> */}
        <div>
          <button
            class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
            onClick={() => setPreviewOpen(false)}
          >
            Back
          </button>
          <button
            class="bg-[#6E66D4] ml-2 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>

      <div
        className="flex justify-center"
        ref={pdfContainerRef}
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <div className="xs:block sm:hidden">
          <button class="bg-[#6E66D4] ml-2 mt-20 text-white font-bold py-2 px-4 rounded">
            <PDFDownloadLink document={<MyPdfDocument />} fileName="gmLaw.pdf">
              {({ _blob, _url, loading, _error }) =>
                loading ? 'Loading document...' : 'Download Preview'
              }
            </PDFDownloadLink>
          </button>
        </div>
        <div className="xs:hidden sm:block">
          <PDFViewer width={'100%'} height={'auto'}>
            <MyPdfDocument />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default FormDataPreview;
