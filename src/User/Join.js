import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Join = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="signuppage">
        <div className="Title">
          <h1>SIGN UP</h1>
        </div>

        <form action="" method="post">
          <div>
            <h4>
              <label for="email">E-MAIL</label>
            </h4>
            <div>
              <input type="email" id="email" className="signUpForm" />
            </div>
          </div>

          <div>
            <h4>
              <label for="passWord">PASSWORD</label>
            </h4>
            <div>
              <input type="password" id="passWord" className="signUpForm" />
            </div>
            <h4>
              <label for="CheckUserPassword">PASSWORD CHECK</label>
            </h4>
            <div>
              <input
                type="password"
                id="CheckUserPassword"
                className="signUpForm"
              />
            </div>
          </div>

          <div>
            <h4>
              <label for="name">NAME</label>
            </h4>
            <div>
              <input type="text" id="name" className="signUpForm" />
            </div>
          </div>

          <div>
            <h4>
              <label for="phone_number">PHONE NUMBER</label>
            </h4>
            <div>
              <input type="text" id="phone_number" className="signUpForm" />
            </div>
          </div>

          <div>
            <h4>
              <label for="role_input"></label>
            </h4>
            <select className="role_input" name="role_input">
              <option value selected>
                ROLE
              </option>
              <option value="reader">독자</option>
              <option value="writer">작가</option>
              <option value="None">선택 안함</option>
            </select>
          </div>

          <hr width="300px" />
          <div className="checkAgreement">
            <input type="checkbox" />
            <span>(필수) 이용약관에 동의합니다.</span>
          </div>
          <div class="agreement">
            <p>
              저작권법 [시행 2021. 6. 9.] [법률 제17588호, 2020. 12. 8.,
              일부개정] 문화체육관광부 (저작권정책과) 044-203-2476 제1장 총칙
              제1조(목적) 이 법은 저작자의 권리와 이에 인접하는 권리를 보호하고
              저작물의 공정한 이용을 도모함으로써 문화 및 관련 산업의 향상발전에
              이바지함을 목적으로 한다. 개정 2009. 4. 22. 제2조(정의) 이 법에서
              사용하는 용어의 뜻은 다음과 같다. 개정 2009. 4. 22., 2011. 6. 30.,
              2011. 12. 2., 2016. 3. 22., 2021. 5. 18. 1. “저작물”은 인간의 사상
              또는 감정을 표현한 창작물을 말한다. 2. “저작자”는 저작물을 창작한
              자를 말한다. 3. “공연”은 저작물 또는 실연ㆍ음반ㆍ방송을
              상연ㆍ연주ㆍ가창ㆍ구연ㆍ낭독ㆍ상영ㆍ재생 그 밖의 방법으로 공중
              에게 공개하는 것을 말하며, 동일인의 점유에 속하는 연결된 장소
              안에서 이루어지는 송신(전송을 제외한다)을 포 함한다. 4. “실연자”는
              저작물을 연기ㆍ무용ㆍ연주ㆍ가창ㆍ구연ㆍ낭독 그 밖의 예능적
              방법으로 표현하거나 저작물이 아닌 것을 이와 유사한 방법으로
              표현하는 실연을 하는 자를 말하며, 실연을 지휘, 연출 또는 감독하는
              자를 포함한다. 5. “음반”은 음(음성ㆍ음향을 말한다. 이하 같다)이
              유형물에 고정된 것(음을 디지털화한 것을 포함한다)을 말한다. 다만,
              음이 영상과 함께 고정된 것을 제외한다. 6. “음반제작자”는 음반을
              최초로 제작하는 데 있어 전체적으로 기획하고 책임을 지는 자를
              말한다. 7. “공중송신”은 저작물, 실연ㆍ음반ㆍ방송 또는
              데이터베이스(이하 “저작물등”이라 한다)를 공중이 수신하거나 접
              근하게 할 목적으로 무선 또는 유선통신의 방법에 의하여 송신하거나
              이용에 제공하는 것을 말한다. 8. “방송”은 공중송신 중 공중이 동시에
              수신하게 할 목적으로 음ㆍ영상 또는 음과 영상 등을 송신하는 것을
              말한다. 8의2. “암호화된 방송 신호”란 방송사업자나 방송사업자의
              동의를 받은 자가 정당한 권한 없이 방송(유선 및 위성 통신의 방법에
              의한 방송으로 한정한다)을 수신하는 것을 방지하거나 억제하기 위하여
              전자적으로 암호화한 방 송 신호를 말한다. 9. “방송사업자”는 방송을
              업으로 하는 자를 말한다. 10. “전송(傳送)”은 공중송신 중 공중의
              구성원이 개별적으로 선택한 시간과 장소에서 접근할 수 있도록
              저작물등을 이용에 제공하는 것을 말하며, 그에 따라 이루어지는
              송신을 포함한다. 11. “디지털음성송신”은 공중송신 중 공중으로
              하여금 동시에 수신하게 할 목적으로 공중의 구성원의 요청에 의하 여
              개시되는 디지털 방식의 음의 송신을 말하며, 전송을 제외한다. 12.
              “디지털음성송신사업자”는 디지털음성송신을 업으로 하는 자를 말한다.
              13. “영상저작물”은 연속적인 영상(음의 수반여부는 가리지
              아니한다)이 수록된 창작물로서 그 영상을 기계 또는 전 자장치에
              의하여 재생하여 볼 수 있거나 보고 들을 수 있는 것을 말한다. 14.
              “영상제작자”는 영상저작물의 제작에 있어 그 전체를 기획하고 책임을
              지는 자를 말한다. 15. “응용미술저작물”은 물품에 동일한 형상으로
              복제될 수 있는 미술저작물로서 그 이용된 물품과 구분되어 독자 성을
              인정할 수 있는 것을 말하며, 디자인 등을 포함한다. 16.
              “컴퓨터프로그램저작물”은 특정한 결과를 얻기 위하여 컴퓨터 등
              정보처리능력을 가진 장치(이하 “컴퓨터”라 한 다) 내에서 직접 또는
              간접으로 사용되는 일련의 지시ㆍ명령으로 표현된 창작물을 말한다.
              17. “편집물”은 저작물이나 부호ㆍ문자ㆍ음ㆍ영상 그 밖의 형태의
              자료(이하 “소재”라 한다)의 집합물을 말하며, 데 이터베이스를
              포함한다.
            </p>
          </div>
          <div className="checkAgreement">
            <input type="checkbox" />
            <span> (필수) 개인정보 수집 및 이용에 동의합니다. </span>
          </div>
          <div className="checkAgreement">
            <input type="checkbox" />
            <span>(필수) 만 19세 이상입니다.</span>
          </div>

          <input type="submit" value="SIGN UP" className="submitBtn" />
        </form>
      </div>
    </div>
  );
};

export default Join;
