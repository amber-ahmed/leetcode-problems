#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    vector<int> nums{1,1,2};
    int n = nums.size();
    int i=0,j=1;
    while(j<n)
    {
        if(nums[i]==nums[j])
            j++;
        else
        {
            nums[++i]=nums[j++];
        }
    }
   // for(int i = 0;i<n;i++)
       // cout<<nums[i]<<" ";
    cout<<i+1;
}
