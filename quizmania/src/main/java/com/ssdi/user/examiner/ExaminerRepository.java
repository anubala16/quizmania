package com.ssdi.user.examiner;

import org.springframework.data.repository.CrudRepository;


public interface ExaminerRepository extends CrudRepository<Examiner, Integer>{
	public void deleteByEmail(String email);
}