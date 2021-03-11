package ParallelTests;

import org.testng.annotations.Test;

public class ParallelTestExample1
{
	@Test
	public void myTest1()
	{
		System.out.println("I am in test1:  "+ Thread.currentThread().getId());
	}
	
	@Test
	public void myTest2()
	{
		System.out.println("I am in test2: "+ Thread.currentThread().getId());
	}
	
	@Test
	public void myTest3()
	{
		System.out.println("I am in test3: "+ Thread.currentThread().getId());
	}

}
