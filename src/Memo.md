### redux-saga
>단어  
**effect(이펙트)**  
1.(원인에 대한) 결과2.(법률·규칙 등의) 발효3.효과4.…을 (결과로서) 초래하다5.가져오다  
**task(태스트)**  
1.과제 2.업무 3.일 4.작업 5.문제  
**fork(포크)**  
1.포크 2.가지 3.갈래지다 4.갈림

1. 헬퍼 함수
  - **takeEvery**: 여러개의 인스턴스를 동시에 시작되게 한다. 한개 혹은 여러개의 아직 종료되지 않은 인스턴스 태스크(task)들이 있더라도 새로운 인스턴스 태스트를 시작할 수 있다.  
  만약 마지막으로 발생된 인스턴스의 request의 응답만 얻고 싶다면, taskeLastest 헬퍼를 사용  

  - **takeLatest**: takeEvery와 달리 takeLatest는 어느 순간에도 단 하나의 인스턴스 태스크(task)만 실행되게 한다. 마지막으로 시작된 태스크가 되겠다. 만약 인스턴스 태스크가 시작되었을때 이전 태스크(task)가 실행중이라면, 이전 태스크(task)는 자동적으로 취쇠될 것이다.