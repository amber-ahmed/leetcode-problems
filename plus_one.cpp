#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    vector<int> nums{9};
    int i=nums.size()-1;
    while(i>=0&&nums[i]==9)
    //if we provide condition like this while(nums[i]==9&&i>-0) then it will give runtime error
    // because first left condition is checked => nums[-1]==9, it gives error bcz indices cannot have neg values
    {
        nums[i]=0;
        i--;
    }
    if(i==-1)
    {
       // nums.insert(nums.begin(),0);
        nums.insert(nums.begin(),1);
    }
    else
        nums[i]=nums[i]+1;
    for(int i = 0;i<nums.size();i++)
        cout<<nums[i]<<" ";
}

