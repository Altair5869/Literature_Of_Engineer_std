import React from 'react';
import './Notices.css';

function Notices() {
  return(
    <div className="gongji">공지 사항
    <table>
      <thead>
        <tr>
          <th>순번</th><th>게시글</th><th>게시일</th><th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"40px"}>0</td><td>첫 공지입니다!</td><td width={"80px"}>24.06.16</td><td width={"70px"}>2</td>
        </tr>
      </tbody>
    </table>
    </div>
    
  ) 
}

export default Notices;
