#include<bits/stdc++.h>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    vector <int>indices;//int inices[];
    map<int,int> mp;
    int val;
    for(int k = 0;k<nums.size();k++)
    {
        val = target - nums[k];
        if(mp.find(val)!=mp.end())
        {
            return {mp[val],k};
        }
        mp[nums[k]]=k;
    }
    return {};
    }